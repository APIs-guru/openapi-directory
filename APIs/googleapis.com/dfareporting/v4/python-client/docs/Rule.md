# Rule

A rule associates an asset with a targeting template for asset-level targeting. Applicable to INSTREAM_VIDEO creatives.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_id** | **str** | A creativeAssets[].id. This should refer to one of the parent assets in this creative. This is a required field. | [optional] 
**name** | **str** | A user-friendly name for this rule. This is a required field. | [optional] 
**targeting_template_id** | **str** | A targeting template ID. The targeting from the targeting template will be used to determine whether this asset should be served. This is a required field. | [optional] 

## Example

```python
from openapi_client.models.rule import Rule

# TODO update the JSON string below
json = "{}"
# create an instance of Rule from a JSON string
rule_instance = Rule.from_json(json)
# print the JSON string representation of the object
print(Rule.to_json())

# convert the object into a dict
rule_dict = rule_instance.to_dict()
# create an instance of Rule from a dict
rule_from_dict = Rule.from_dict(rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


