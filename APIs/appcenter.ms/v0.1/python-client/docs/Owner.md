# Owner

The information about the app's owner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_url** | **str** | The avatar URL of the owner | [optional] 
**display_name** | **str** | The owner&#39;s display name | 
**email** | **str** | The owner&#39;s email address | [optional] 
**id** | **str** | The unique id (UUID) of the owner | 
**name** | **str** | The unique name that used to identify the owner | 
**type** | **str** | The owner type. Can either be &#39;org&#39; or &#39;user&#39; | 

## Example

```python
from openapi_client.models.owner import Owner

# TODO update the JSON string below
json = "{}"
# create an instance of Owner from a JSON string
owner_instance = Owner.from_json(json)
# print the JSON string representation of the object
print(Owner.to_json())

# convert the object into a dict
owner_dict = owner_instance.to_dict()
# create an instance of Owner from a dict
owner_from_dict = Owner.from_dict(owner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


