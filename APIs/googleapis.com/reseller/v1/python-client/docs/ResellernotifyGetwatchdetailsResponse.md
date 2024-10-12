# ResellernotifyGetwatchdetailsResponse

JSON template for resellernotify getwatchdetails response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_account_email_addresses** | **List[str]** | List of registered service accounts. | [optional] 
**topic_name** | **str** | Topic name of the PubSub | [optional] 

## Example

```python
from openapi_client.models.resellernotify_getwatchdetails_response import ResellernotifyGetwatchdetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResellernotifyGetwatchdetailsResponse from a JSON string
resellernotify_getwatchdetails_response_instance = ResellernotifyGetwatchdetailsResponse.from_json(json)
# print the JSON string representation of the object
print(ResellernotifyGetwatchdetailsResponse.to_json())

# convert the object into a dict
resellernotify_getwatchdetails_response_dict = resellernotify_getwatchdetails_response_instance.to_dict()
# create an instance of ResellernotifyGetwatchdetailsResponse from a dict
resellernotify_getwatchdetails_response_from_dict = ResellernotifyGetwatchdetailsResponse.from_dict(resellernotify_getwatchdetails_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


