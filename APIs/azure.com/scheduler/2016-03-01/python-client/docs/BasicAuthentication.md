# BasicAuthentication


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | Gets or sets the password, return value will always be empty. | [optional] 
**username** | **str** | Gets or sets the username. | [optional] 

## Example

```python
from openapi_client.models.basic_authentication import BasicAuthentication

# TODO update the JSON string below
json = "{}"
# create an instance of BasicAuthentication from a JSON string
basic_authentication_instance = BasicAuthentication.from_json(json)
# print the JSON string representation of the object
print(BasicAuthentication.to_json())

# convert the object into a dict
basic_authentication_dict = basic_authentication_instance.to_dict()
# create an instance of BasicAuthentication from a dict
basic_authentication_from_dict = BasicAuthentication.from_dict(basic_authentication_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


