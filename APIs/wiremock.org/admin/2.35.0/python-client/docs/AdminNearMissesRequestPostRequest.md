# AdminNearMissesRequestPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**absolute_url** | **str** | The full URL to match against | [optional] 
**body** | **str** | Body string to match against | [optional] 
**cookies** | **object** | Cookie patterns to match against in the &lt;key&gt;: { \&quot;&lt;predicate&gt;\&quot;: \&quot;&lt;value&gt;\&quot; } form | [optional] 
**headers** | **object** | Header patterns to match against in the &lt;key&gt;: { \&quot;&lt;predicate&gt;\&quot;: \&quot;&lt;value&gt;\&quot; } form | [optional] 
**method** | **str** | The HTTP request method | [optional] 
**url** | **str** | The path and query to match exactly against | [optional] 

## Example

```python
from openapi_client.models.admin_near_misses_request_post_request import AdminNearMissesRequestPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AdminNearMissesRequestPostRequest from a JSON string
admin_near_misses_request_post_request_instance = AdminNearMissesRequestPostRequest.from_json(json)
# print the JSON string representation of the object
print(AdminNearMissesRequestPostRequest.to_json())

# convert the object into a dict
admin_near_misses_request_post_request_dict = admin_near_misses_request_post_request_instance.to_dict()
# create an instance of AdminNearMissesRequestPostRequest from a dict
admin_near_misses_request_post_request_from_dict = AdminNearMissesRequestPostRequest.from_dict(admin_near_misses_request_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


