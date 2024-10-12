# GoogleCloudAssetV1Rule

This rule message is a customized version of the one defined in the Organization Policy system. In addition to the fields defined in the original organization policy, it contains additional field(s) under specific circumstances to support analysis results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_all** | **bool** | Setting this to true means that all values are allowed. This field can be set only in Policies for list constraints. | [optional] 
**condition** | [**Expr**](Expr.md) |  | [optional] 
**condition_evaluation** | [**ConditionEvaluation**](ConditionEvaluation.md) |  | [optional] 
**deny_all** | **bool** | Setting this to true means that all values are denied. This field can be set only in Policies for list constraints. | [optional] 
**enforce** | **bool** | If &#x60;true&#x60;, then the &#x60;Policy&#x60; is enforced. If &#x60;false&#x60;, then any configuration is acceptable. This field can be set only in Policies for boolean constraints. | [optional] 
**values** | [**GoogleCloudAssetV1StringValues**](GoogleCloudAssetV1StringValues.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1_rule import GoogleCloudAssetV1Rule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1Rule from a JSON string
google_cloud_asset_v1_rule_instance = GoogleCloudAssetV1Rule.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1Rule.to_json())

# convert the object into a dict
google_cloud_asset_v1_rule_dict = google_cloud_asset_v1_rule_instance.to_dict()
# create an instance of GoogleCloudAssetV1Rule from a dict
google_cloud_asset_v1_rule_from_dict = GoogleCloudAssetV1Rule.from_dict(google_cloud_asset_v1_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


