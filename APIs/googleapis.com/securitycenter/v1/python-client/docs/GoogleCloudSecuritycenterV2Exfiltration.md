# GoogleCloudSecuritycenterV2Exfiltration

Exfiltration represents a data exfiltration attempt from one or more sources to one or more targets. The `sources` attribute lists the sources of the exfiltrated data. The `targets` attribute lists the destinations the data was copied to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sources** | [**List[GoogleCloudSecuritycenterV2ExfilResource]**](GoogleCloudSecuritycenterV2ExfilResource.md) | If there are multiple sources, then the data is considered \&quot;joined\&quot; between them. For instance, BigQuery can join multiple tables, and each table would be considered a source. | [optional] 
**targets** | [**List[GoogleCloudSecuritycenterV2ExfilResource]**](GoogleCloudSecuritycenterV2ExfilResource.md) | If there are multiple targets, each target would get a complete copy of the \&quot;joined\&quot; source data. | [optional] 
**total_exfiltrated_bytes** | **str** | Total exfiltrated bytes processed for the entire job. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_exfiltration import GoogleCloudSecuritycenterV2Exfiltration

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2Exfiltration from a JSON string
google_cloud_securitycenter_v2_exfiltration_instance = GoogleCloudSecuritycenterV2Exfiltration.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2Exfiltration.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_exfiltration_dict = google_cloud_securitycenter_v2_exfiltration_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2Exfiltration from a dict
google_cloud_securitycenter_v2_exfiltration_from_dict = GoogleCloudSecuritycenterV2Exfiltration.from_dict(google_cloud_securitycenter_v2_exfiltration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


