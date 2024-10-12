# ApplicationCreated


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**Links**](Links.md) |  | [optional] 
**id** | **str** | The ID allocated to your application by Nexmo. | [optional] 
**keys** | [**KeysWithPrivateKey**](KeysWithPrivateKey.md) |  | [optional] 
**messages** | [**Messages**](Messages.md) |  | 
**name** | **str** | The name of your application | 
**voice** | [**Voice**](Voice.md) |  | 

## Example

```python
from openapi_client.models.application_created import ApplicationCreated

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationCreated from a JSON string
application_created_instance = ApplicationCreated.from_json(json)
# print the JSON string representation of the object
print(ApplicationCreated.to_json())

# convert the object into a dict
application_created_dict = application_created_instance.to_dict()
# create an instance of ApplicationCreated from a dict
application_created_from_dict = ApplicationCreated.from_dict(application_created_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


