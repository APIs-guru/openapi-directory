# GoogleServiceInfo

For display only. Details of a Google Service sending packets to a VPC network. Although the source IP might be a publicly routable address, some Google Services use special routes within Google production infrastructure to reach Compute Engine Instances. https://cloud.google.com/vpc/docs/routes#special_return_paths

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**google_service_type** | **str** | Recognized type of a Google Service. | [optional] 
**source_ip** | **str** | Source IP address. | [optional] 

## Example

```python
from openapi_client.models.google_service_info import GoogleServiceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleServiceInfo from a JSON string
google_service_info_instance = GoogleServiceInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleServiceInfo.to_json())

# convert the object into a dict
google_service_info_dict = google_service_info_instance.to_dict()
# create an instance of GoogleServiceInfo from a dict
google_service_info_from_dict = GoogleServiceInfo.from_dict(google_service_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


