# ConnectionDetails

Details of the Connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection** | [**Connection**](Connection.md) |  | [optional] 
**recent_mig_vms** | **List[str]** | If type&#x3D;GCP_REGIONAL_MIG, contains most recent VM instances, like \&quot;https://www.googleapis.com/compute/v1/projects/{project_id}/zones/{zone_id}/instances/{instance_id}\&quot;. | [optional] 

## Example

```python
from openapi_client.models.connection_details import ConnectionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionDetails from a JSON string
connection_details_instance = ConnectionDetails.from_json(json)
# print the JSON string representation of the object
print(ConnectionDetails.to_json())

# convert the object into a dict
connection_details_dict = connection_details_instance.to_dict()
# create an instance of ConnectionDetails from a dict
connection_details_from_dict = ConnectionDetails.from_dict(connection_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


