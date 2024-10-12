# OperationMetadataV1

Metadata describing an Operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_id** | **str** | The Cloud Build ID of the function created or updated by an API call. This field is only populated for Create and Update operations. | [optional] 
**build_name** | **str** | The Cloud Build Name of the function deployment. This field is only populated for Create and Update operations. &#x60;projects//locations//builds/&#x60;. | [optional] 
**request** | **Dict[str, object]** | The original request that started the operation. | [optional] 
**source_token** | **str** | An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments. | [optional] 
**target** | **str** | Target of the operation - for example &#x60;projects/project-1/locations/region-1/functions/function-1&#x60; | [optional] 
**type** | **str** | Type of operation. | [optional] 
**update_time** | **str** | The last update timestamp of the operation. | [optional] 
**version_id** | **str** | Version id of the function created or updated by an API call. This field is only populated for Create and Update operations. | [optional] 

## Example

```python
from openapi_client.models.operation_metadata_v1 import OperationMetadataV1

# TODO update the JSON string below
json = "{}"
# create an instance of OperationMetadataV1 from a JSON string
operation_metadata_v1_instance = OperationMetadataV1.from_json(json)
# print the JSON string representation of the object
print(OperationMetadataV1.to_json())

# convert the object into a dict
operation_metadata_v1_dict = operation_metadata_v1_instance.to_dict()
# create an instance of OperationMetadataV1 from a dict
operation_metadata_v1_from_dict = OperationMetadataV1.from_dict(operation_metadata_v1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


