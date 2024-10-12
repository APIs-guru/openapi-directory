# GoogleCloudAssetV1ListConstraint

A `Constraint` that allows or disallows a list of string values, which are configured by an organization's policy administrator with a `Policy`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**supports_in** | **bool** | Indicates whether values grouped into categories can be used in &#x60;Policy.allowed_values&#x60; and &#x60;Policy.denied_values&#x60;. For example, &#x60;\&quot;in:Python\&quot;&#x60; would match any value in the &#39;Python&#39; group. | [optional] 
**supports_under** | **bool** | Indicates whether subtrees of Cloud Resource Manager resource hierarchy can be used in &#x60;Policy.allowed_values&#x60; and &#x60;Policy.denied_values&#x60;. For example, &#x60;\&quot;under:folders/123\&quot;&#x60; would match any resource under the &#39;folders/123&#39; folder. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1_list_constraint import GoogleCloudAssetV1ListConstraint

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1ListConstraint from a JSON string
google_cloud_asset_v1_list_constraint_instance = GoogleCloudAssetV1ListConstraint.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1ListConstraint.to_json())

# convert the object into a dict
google_cloud_asset_v1_list_constraint_dict = google_cloud_asset_v1_list_constraint_instance.to_dict()
# create an instance of GoogleCloudAssetV1ListConstraint from a dict
google_cloud_asset_v1_list_constraint_from_dict = GoogleCloudAssetV1ListConstraint.from_dict(google_cloud_asset_v1_list_constraint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


