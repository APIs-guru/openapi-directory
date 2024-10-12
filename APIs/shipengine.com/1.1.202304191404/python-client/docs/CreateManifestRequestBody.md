# CreateManifestRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_id** | **str** | A string that uniquely identifies the carrier | 
**excluded_label_ids** | **List[str]** | The list of label ids to exclude from the manifest | [optional] 
**label_ids** | **List[str]** | The list of label ids to include in the manifest | 
**ship_date** | **datetime** | The ship date that the shipment will be sent out on | 
**warehouse_id** | **str** | A string that uniquely identifies the warehouse | 

## Example

```python
from openapi_client.models.create_manifest_request_body import CreateManifestRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of CreateManifestRequestBody from a JSON string
create_manifest_request_body_instance = CreateManifestRequestBody.from_json(json)
# print the JSON string representation of the object
print(CreateManifestRequestBody.to_json())

# convert the object into a dict
create_manifest_request_body_dict = create_manifest_request_body_instance.to_dict()
# create an instance of CreateManifestRequestBody from a dict
create_manifest_request_body_from_dict = CreateManifestRequestBody.from_dict(create_manifest_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


