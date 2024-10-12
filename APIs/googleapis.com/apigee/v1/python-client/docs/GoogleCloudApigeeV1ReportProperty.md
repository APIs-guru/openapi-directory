# GoogleCloudApigeeV1ReportProperty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_property** | **str** | name of the property | [optional] 
**value** | [**List[GoogleCloudApigeeV1Attribute]**](GoogleCloudApigeeV1Attribute.md) | property values | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_report_property import GoogleCloudApigeeV1ReportProperty

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ReportProperty from a JSON string
google_cloud_apigee_v1_report_property_instance = GoogleCloudApigeeV1ReportProperty.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ReportProperty.to_json())

# convert the object into a dict
google_cloud_apigee_v1_report_property_dict = google_cloud_apigee_v1_report_property_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ReportProperty from a dict
google_cloud_apigee_v1_report_property_from_dict = GoogleCloudApigeeV1ReportProperty.from_dict(google_cloud_apigee_v1_report_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


