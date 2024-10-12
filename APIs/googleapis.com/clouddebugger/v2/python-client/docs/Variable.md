# Variable

Represents a variable or an argument possibly of a compound object type. Note how the following variables are represented: 1) A simple variable: int x = 5 { name: \"x\", value: \"5\", type: \"int\" } // Captured variable 2) A compound object: struct T { int m1; int m2; }; T x = { 3, 7 }; { // Captured variable name: \"x\", type: \"T\", members { name: \"m1\", value: \"3\", type: \"int\" }, members { name: \"m2\", value: \"7\", type: \"int\" } } 3) A pointer where the pointee was captured: T x = { 3, 7 }; T* p = &x; { // Captured variable name: \"p\", type: \"T*\", value: \"0x00500500\", members { name: \"m1\", value: \"3\", type: \"int\" }, members { name: \"m2\", value: \"7\", type: \"int\" } } 4) A pointer where the pointee was not captured: T* p = new T; { // Captured variable name: \"p\", type: \"T*\", value: \"0x00400400\" status { is_error: true, description { format: \"unavailable\" } } } The status should describe the reason for the missing value, such as ``, ``, ``. Note that a null pointer should not have members. 5) An unnamed value: int* p = new int(7); { // Captured variable name: \"p\", value: \"0x00500500\", type: \"int*\", members { value: \"7\", type: \"int\" } } 6) An unnamed pointer where the pointee was not captured: int* p = new int(7); int** pp = &p; { // Captured variable name: \"pp\", value: \"0x00500500\", type: \"int**\", members { value: \"0x00400400\", type: \"int*\" status { is_error: true, description: { format: \"unavailable\" } } } } } To optimize computation, memory and network traffic, variables that repeat in the output multiple times can be stored once in a shared variable table and be referenced using the `var_table_index` field. The variables stored in the shared table are nameless and are essentially a partition of the complete variable. To reconstruct the complete variable, merge the referencing variable with the referenced variable. When using the shared variable table, the following variables: T x = { 3, 7 }; T* p = &x; T& r = x; { name: \"x\", var_table_index: 3, type: \"T\" } // Captured variables { name: \"p\", value \"0x00500500\", type=\"T*\", var_table_index: 3 } { name: \"r\", type=\"T&\", var_table_index: 3 } { // Shared variable table entry #3: members { name: \"m1\", value: \"3\", type: \"int\" }, members { name: \"m2\", value: \"7\", type: \"int\" } } Note that the pointer address is stored with the referencing variable and not with the referenced variable. This allows the referenced variable to be shared between pointers and references. The type field is optional. The debugger agent may or may not support it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**members** | [**List[Variable]**](Variable.md) | Members contained or pointed to by the variable. | [optional] 
**name** | **str** | Name of the variable, if any. | [optional] 
**status** | [**StatusMessage**](StatusMessage.md) |  | [optional] 
**type** | **str** | Variable type (e.g. &#x60;MyClass&#x60;). If the variable is split with &#x60;var_table_index&#x60;, &#x60;type&#x60; goes next to &#x60;value&#x60;. The interpretation of a type is agent specific. It is recommended to include the dynamic type rather than a static type of an object. | [optional] 
**value** | **str** | Simple value of the variable. | [optional] 
**var_table_index** | **int** | Reference to a variable in the shared variable table. More than one variable can reference the same variable in the table. The &#x60;var_table_index&#x60; field is an index into &#x60;variable_table&#x60; in Breakpoint. | [optional] 

## Example

```python
from openapi_client.models.variable import Variable

# TODO update the JSON string below
json = "{}"
# create an instance of Variable from a JSON string
variable_instance = Variable.from_json(json)
# print the JSON string representation of the object
print(Variable.to_json())

# convert the object into a dict
variable_dict = variable_instance.to_dict()
# create an instance of Variable from a dict
variable_from_dict = Variable.from_dict(variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


