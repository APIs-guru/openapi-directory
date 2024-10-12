# SalesforceDataCloudProperties

Connection properties specific to Salesforce DataCloud. This is intended for use only by Salesforce partner projects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | **str** | Output only. A unique Google-owned and Google-generated service account identity for the connection. | [optional] [readonly] 
**instance_uri** | **str** | The URL to the user&#39;s Salesforce DataCloud instance. | [optional] 
**tenant_id** | **str** | The ID of the user&#39;s Salesforce tenant. | [optional] 

## Example

```python
from openapi_client.models.salesforce_data_cloud_properties import SalesforceDataCloudProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SalesforceDataCloudProperties from a JSON string
salesforce_data_cloud_properties_instance = SalesforceDataCloudProperties.from_json(json)
# print the JSON string representation of the object
print(SalesforceDataCloudProperties.to_json())

# convert the object into a dict
salesforce_data_cloud_properties_dict = salesforce_data_cloud_properties_instance.to_dict()
# create an instance of SalesforceDataCloudProperties from a dict
salesforce_data_cloud_properties_from_dict = SalesforceDataCloudProperties.from_dict(salesforce_data_cloud_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


