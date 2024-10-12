# Workstation

A single instance of a developer workstation with its own persistent storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Optional. Client-specified annotations. | [optional] 
**create_time** | **str** | Output only. Time when this workstation was created. | [optional] [readonly] 
**delete_time** | **str** | Output only. Time when this workstation was soft-deleted. | [optional] [readonly] 
**display_name** | **str** | Optional. Human-readable name for this workstation. | [optional] 
**env** | **Dict[str, str]** | Optional. Environment variables passed to the workstation container&#39;s entrypoint. | [optional] 
**etag** | **str** | Optional. Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding. | [optional] 
**host** | **str** | Output only. Host to which clients can send HTTPS traffic that will be received by the workstation. Authorized traffic will be received to the workstation as HTTP on port 80. To send traffic to a different port, clients may prefix the host with the destination port in the format &#x60;{port}-{host}&#x60;. | [optional] [readonly] 
**kms_key** | **str** | Output only. The name of the Google Cloud KMS encryption key used to encrypt this workstation. The KMS key can only be configured in the WorkstationConfig. The expected format is &#x60;projects/*/locations/*/keyRings/*/cryptoKeys/*&#x60;. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Optional. [Labels](https://cloud.google.com/workstations/docs/label-resources) that are applied to the workstation and that are also propagated to the underlying Compute Engine resources. | [optional] 
**name** | **str** | Identifier. Full name of this workstation. | [optional] 
**reconciling** | **bool** | Output only. Indicates whether this workstation is currently being updated to match its intended state. | [optional] [readonly] 
**start_time** | **str** | Output only. Time when this workstation was most recently successfully started, regardless of the workstation&#39;s initial state. | [optional] [readonly] 
**state** | **str** | Output only. Current state of the workstation. | [optional] [readonly] 
**uid** | **str** | Output only. A system-assigned unique identifier for this workstation. | [optional] [readonly] 
**update_time** | **str** | Output only. Time when this workstation was most recently updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workstation import Workstation

# TODO update the JSON string below
json = "{}"
# create an instance of Workstation from a JSON string
workstation_instance = Workstation.from_json(json)
# print the JSON string representation of the object
print(Workstation.to_json())

# convert the object into a dict
workstation_dict = workstation_instance.to_dict()
# create an instance of Workstation from a dict
workstation_from_dict = Workstation.from_dict(workstation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


