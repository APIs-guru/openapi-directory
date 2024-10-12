# DatacenterConnector

DatacenterConnector message describes a connector between the Source and Google Cloud, which is installed on a vmware datacenter (an OVA vm installed by the user) to connect the Datacenter to Google Cloud and support vm migration data transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appliance_infrastructure_version** | **str** | Output only. Appliance OVA version. This is the OVA which is manually installed by the user and contains the infrastructure for the automatically updatable components on the appliance. | [optional] [readonly] 
**appliance_software_version** | **str** | Output only. Appliance last installed update bundle version. This is the version of the automatically updatable components on the appliance. | [optional] [readonly] 
**available_versions** | [**AvailableUpdates**](AvailableUpdates.md) |  | [optional] 
**bucket** | **str** | Output only. The communication channel between the datacenter connector and Google Cloud. | [optional] [readonly] 
**create_time** | **str** | Output only. The time the connector was created (as an API call, not when it was actually installed). | [optional] [readonly] 
**error** | [**Status**](Status.md) |  | [optional] 
**name** | **str** | Output only. The connector&#39;s name. | [optional] [readonly] 
**registration_id** | **str** | Immutable. A unique key for this connector. This key is internal to the OVA connector and is supplied with its creation during the registration process and can not be modified. | [optional] 
**service_account** | **str** | The service account to use in the connector when communicating with the cloud. | [optional] 
**state** | **str** | Output only. State of the DatacenterConnector, as determined by the health checks. | [optional] [readonly] 
**state_time** | **str** | Output only. The time the state was last set. | [optional] [readonly] 
**update_time** | **str** | Output only. The last time the connector was updated with an API call. | [optional] [readonly] 
**upgrade_status** | [**UpgradeStatus**](UpgradeStatus.md) |  | [optional] 
**version** | **str** | The version running in the DatacenterConnector. This is supplied by the OVA connector during the registration process and can not be modified. | [optional] 

## Example

```python
from openapi_client.models.datacenter_connector import DatacenterConnector

# TODO update the JSON string below
json = "{}"
# create an instance of DatacenterConnector from a JSON string
datacenter_connector_instance = DatacenterConnector.from_json(json)
# print the JSON string representation of the object
print(DatacenterConnector.to_json())

# convert the object into a dict
datacenter_connector_dict = datacenter_connector_instance.to_dict()
# create an instance of DatacenterConnector from a dict
datacenter_connector_from_dict = DatacenterConnector.from_dict(datacenter_connector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


