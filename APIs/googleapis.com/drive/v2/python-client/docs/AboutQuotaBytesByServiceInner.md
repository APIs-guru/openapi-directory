# AboutQuotaBytesByServiceInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_used** | **str** | The storage quota bytes used by the service. | [optional] 
**service_name** | **str** | The service&#39;s name, e.g. DRIVE, GMAIL, or PHOTOS. | [optional] 

## Example

```python
from openapi_client.models.about_quota_bytes_by_service_inner import AboutQuotaBytesByServiceInner

# TODO update the JSON string below
json = "{}"
# create an instance of AboutQuotaBytesByServiceInner from a JSON string
about_quota_bytes_by_service_inner_instance = AboutQuotaBytesByServiceInner.from_json(json)
# print the JSON string representation of the object
print(AboutQuotaBytesByServiceInner.to_json())

# convert the object into a dict
about_quota_bytes_by_service_inner_dict = about_quota_bytes_by_service_inner_instance.to_dict()
# create an instance of AboutQuotaBytesByServiceInner from a dict
about_quota_bytes_by_service_inner_from_dict = AboutQuotaBytesByServiceInner.from_dict(about_quota_bytes_by_service_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


