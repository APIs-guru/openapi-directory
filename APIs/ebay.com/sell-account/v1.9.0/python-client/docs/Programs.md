# Programs

The base response type of the <b>getOptedInPrograms</b> method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**programs** | [**List[Program]**](Program.md) | An array of seller programs that the seller&#39;s account is opted in to. | [optional] 

## Example

```python
from openapi_client.models.programs import Programs

# TODO update the JSON string below
json = "{}"
# create an instance of Programs from a JSON string
programs_instance = Programs.from_json(json)
# print the JSON string representation of the object
print(Programs.to_json())

# convert the object into a dict
programs_dict = programs_instance.to_dict()
# create an instance of Programs from a dict
programs_from_dict = Programs.from_dict(programs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


