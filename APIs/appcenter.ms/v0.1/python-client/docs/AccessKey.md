# AccessKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by** | **str** | Account name of creator. | [optional] 
**created_time** | **float** | Created time of access key | [optional] 
**description** | **str** | Description of access key | [optional] 
**expires** | **float** | Time of expiry of access key | [optional] 
**friendly_name** | **str** | Friendly name of access key | [optional] 
**id** | **str** | Id of accessKey | [optional] 
**is_session** | **bool** | Legacy property which indicate if accessKey was created from session | [optional] 
**name** | **str** | Key of access key | [optional] 

## Example

```python
from openapi_client.models.access_key import AccessKey

# TODO update the JSON string below
json = "{}"
# create an instance of AccessKey from a JSON string
access_key_instance = AccessKey.from_json(json)
# print the JSON string representation of the object
print(AccessKey.to_json())

# convert the object into a dict
access_key_dict = access_key_instance.to_dict()
# create an instance of AccessKey from a dict
access_key_from_dict = AccessKey.from_dict(access_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


