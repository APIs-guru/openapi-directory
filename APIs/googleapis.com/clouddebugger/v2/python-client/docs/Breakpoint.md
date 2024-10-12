# Breakpoint

------------------------------------------------------------------------------ ## Breakpoint (the resource) Represents the breakpoint specification, status and results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Action that the agent should perform when the code at the breakpoint location is hit. | [optional] 
**canary_expire_time** | **str** | The deadline for the breakpoint to stay in CANARY_ACTIVE state. The value is meaningless when the breakpoint is not in CANARY_ACTIVE state. | [optional] 
**condition** | **str** | Condition that triggers the breakpoint. The condition is a compound boolean expression composed using expressions in a programming language at the source location. | [optional] 
**create_time** | **str** | Time this breakpoint was created by the server in seconds resolution. | [optional] 
**evaluated_expressions** | [**List[Variable]**](Variable.md) | Values of evaluated expressions at breakpoint time. The evaluated expressions appear in exactly the same order they are listed in the &#x60;expressions&#x60; field. The &#x60;name&#x60; field holds the original expression text, the &#x60;value&#x60; or &#x60;members&#x60; field holds the result of the evaluated expression. If the expression cannot be evaluated, the &#x60;status&#x60; inside the &#x60;Variable&#x60; will indicate an error and contain the error text. | [optional] 
**expressions** | **List[str]** | List of read-only expressions to evaluate at the breakpoint location. The expressions are composed using expressions in the programming language at the source location. If the breakpoint action is &#x60;LOG&#x60;, the evaluated expressions are included in log statements. | [optional] 
**final_time** | **str** | Time this breakpoint was finalized as seen by the server in seconds resolution. | [optional] 
**id** | **str** | Breakpoint identifier, unique in the scope of the debuggee. | [optional] 
**is_final_state** | **bool** | When true, indicates that this is a final result and the breakpoint state will not change from here on. | [optional] 
**labels** | **Dict[str, str]** | A set of custom breakpoint properties, populated by the agent, to be displayed to the user. | [optional] 
**location** | [**SourceLocation**](SourceLocation.md) |  | [optional] 
**log_level** | **str** | Indicates the severity of the log. Only relevant when action is &#x60;LOG&#x60;. | [optional] 
**log_message_format** | **str** | Only relevant when action is &#x60;LOG&#x60;. Defines the message to log when the breakpoint hits. The message may include parameter placeholders &#x60;$0&#x60;, &#x60;$1&#x60;, etc. These placeholders are replaced with the evaluated value of the appropriate expression. Expressions not referenced in &#x60;log_message_format&#x60; are not logged. Example: &#x60;Message received, id &#x3D; $0, count &#x3D; $1&#x60; with &#x60;expressions&#x60; &#x3D; &#x60;[ message.id, message.count ]&#x60;. | [optional] 
**stack_frames** | [**List[StackFrame]**](StackFrame.md) | The stack at breakpoint time, where stack_frames[0] represents the most recently entered function. | [optional] 
**state** | **str** | The current state of the breakpoint. | [optional] 
**status** | [**StatusMessage**](StatusMessage.md) |  | [optional] 
**user_email** | **str** | E-mail address of the user that created this breakpoint | [optional] 
**variable_table** | [**List[Variable]**](Variable.md) | The &#x60;variable_table&#x60; exists to aid with computation, memory and network traffic optimization. It enables storing a variable once and reference it from multiple variables, including variables stored in the &#x60;variable_table&#x60; itself. For example, the same &#x60;this&#x60; object, which may appear at many levels of the stack, can have all of its data stored once in this table. The stack frame variables then would hold only a reference to it. The variable &#x60;var_table_index&#x60; field is an index into this repeated field. The stored objects are nameless and get their name from the referencing variable. The effective variable is a merge of the referencing variable and the referenced variable. | [optional] 

## Example

```python
from openapi_client.models.breakpoint import Breakpoint

# TODO update the JSON string below
json = "{}"
# create an instance of Breakpoint from a JSON string
breakpoint_instance = Breakpoint.from_json(json)
# print the JSON string representation of the object
print(Breakpoint.to_json())

# convert the object into a dict
breakpoint_dict = breakpoint_instance.to_dict()
# create an instance of Breakpoint from a dict
breakpoint_from_dict = Breakpoint.from_dict(breakpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


