# CreateManifestLabelIdsRequestBody

A create manifest request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label_ids** | **List[str]** | The list of label ids to include in the manifest | 

## Example

```python
from openapi_client.models.create_manifest_label_ids_request_body import CreateManifestLabelIdsRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of CreateManifestLabelIdsRequestBody from a JSON string
create_manifest_label_ids_request_body_instance = CreateManifestLabelIdsRequestBody.from_json(json)
# print the JSON string representation of the object
print(CreateManifestLabelIdsRequestBody.to_json())

# convert the object into a dict
create_manifest_label_ids_request_body_dict = create_manifest_label_ids_request_body_instance.to_dict()
# create an instance of CreateManifestLabelIdsRequestBody from a dict
create_manifest_label_ids_request_body_from_dict = CreateManifestLabelIdsRequestBody.from_dict(create_manifest_label_ids_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


