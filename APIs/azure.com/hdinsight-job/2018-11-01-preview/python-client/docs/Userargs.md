# Userargs

Gets or sets the object containing the user arguments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arg** | **List[str]** | The list of args defined by the user. | [optional] [readonly] 
**callback** | **object** | The callback URL, if any. | [optional] 
**define** | **List[str]** | The define properties defined by the user. | [optional] [readonly] 
**enablelog** | **str** | Whether or not the user enabled logs. | [optional] 
**execute** | **str** | The query defined by the user. | [optional] 
**file** | **object** | The query file provided by the user. | [optional] 
**files** | **object** | The files defined by the user. | [optional] 
**jar** | **str** | The JAR file provided by the user. | [optional] 
**statusdir** | **object** | The status directory defined by the user. | [optional] 

## Example

```python
from openapi_client.models.userargs import Userargs

# TODO update the JSON string below
json = "{}"
# create an instance of Userargs from a JSON string
userargs_instance = Userargs.from_json(json)
# print the JSON string representation of the object
print(Userargs.to_json())

# convert the object into a dict
userargs_dict = userargs_instance.to_dict()
# create an instance of Userargs from a dict
userargs_from_dict = Userargs.from_dict(userargs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


