# ReverseSshConnectivity

The details needed to configure a reverse SSH tunnel between the source and destination databases. These details will be used when calling the generateSshScript method (see https://cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.migrationJobs/generateSshScript) to produce the script that will help set up the reverse SSH tunnel, and to set up the VPC peering between the Cloud SQL private network and the VPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vm** | **str** | The name of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. | [optional] 
**vm_ip** | **str** | Required. The IP of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. | [optional] 
**vm_port** | **int** | Required. The forwarding port of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. | [optional] 
**vpc** | **str** | The name of the VPC to peer with the Cloud SQL private network. | [optional] 

## Example

```python
from openapi_client.models.reverse_ssh_connectivity import ReverseSshConnectivity

# TODO update the JSON string below
json = "{}"
# create an instance of ReverseSshConnectivity from a JSON string
reverse_ssh_connectivity_instance = ReverseSshConnectivity.from_json(json)
# print the JSON string representation of the object
print(ReverseSshConnectivity.to_json())

# convert the object into a dict
reverse_ssh_connectivity_dict = reverse_ssh_connectivity_instance.to_dict()
# create an instance of ReverseSshConnectivity from a dict
reverse_ssh_connectivity_from_dict = ReverseSshConnectivity.from_dict(reverse_ssh_connectivity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


