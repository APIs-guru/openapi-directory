# POSTVersionsPublishAnonRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spec_data** | [**POSTVersionsPublishAnonRequestSpecData**](POSTVersionsPublishAnonRequestSpecData.md) |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.post_versions_publish_anon_request import POSTVersionsPublishAnonRequest

# TODO update the JSON string below
json = "{}"
# create an instance of POSTVersionsPublishAnonRequest from a JSON string
post_versions_publish_anon_request_instance = POSTVersionsPublishAnonRequest.from_json(json)
# print the JSON string representation of the object
print(POSTVersionsPublishAnonRequest.to_json())

# convert the object into a dict
post_versions_publish_anon_request_dict = post_versions_publish_anon_request_instance.to_dict()
# create an instance of POSTVersionsPublishAnonRequest from a dict
post_versions_publish_anon_request_from_dict = POSTVersionsPublishAnonRequest.from_dict(post_versions_publish_anon_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


