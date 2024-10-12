# Federation

Represents a federation of multiple backend metastores.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_metastores** | [**Dict[str, BackendMetastore]**](BackendMetastore.md) | A map from BackendMetastore rank to BackendMetastores from which the federation service serves metadata at query time. The map key represents the order in which BackendMetastores should be evaluated to resolve database names at query time and should be greater than or equal to zero. A BackendMetastore with a lower number will be evaluated before a BackendMetastore with a higher number. | [optional] 
**create_time** | **str** | Output only. The time when the metastore federation was created. | [optional] [readonly] 
**endpoint_uri** | **str** | Output only. The federation endpoint. | [optional] [readonly] 
**labels** | **Dict[str, str]** | User-defined labels for the metastore federation. | [optional] 
**name** | **str** | Immutable. The relative resource name of the federation, of the form: projects/{project_number}/locations/{location_id}/federations/{federation_id}&#x60;. | [optional] 
**state** | **str** | Output only. The current state of the federation. | [optional] [readonly] 
**state_message** | **str** | Output only. Additional information about the current state of the metastore federation, if available. | [optional] [readonly] 
**uid** | **str** | Output only. The globally unique resource identifier of the metastore federation. | [optional] [readonly] 
**update_time** | **str** | Output only. The time when the metastore federation was last updated. | [optional] [readonly] 
**version** | **str** | Immutable. The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version. | [optional] 

## Example

```python
from openapi_client.models.federation import Federation

# TODO update the JSON string below
json = "{}"
# create an instance of Federation from a JSON string
federation_instance = Federation.from_json(json)
# print the JSON string representation of the object
print(Federation.to_json())

# convert the object into a dict
federation_dict = federation_instance.to_dict()
# create an instance of Federation from a dict
federation_from_dict = Federation.from_dict(federation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


