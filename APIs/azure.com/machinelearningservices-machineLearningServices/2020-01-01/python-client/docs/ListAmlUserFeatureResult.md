# ListAmlUserFeatureResult

The List Aml user feature operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of AML user features information. Call ListNext() with this to fetch the next page of AML user features information. | [optional] [readonly] 
**value** | [**List[AmlUserFeature]**](AmlUserFeature.md) | The list of AML user facing features. | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_aml_user_feature_result import ListAmlUserFeatureResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListAmlUserFeatureResult from a JSON string
list_aml_user_feature_result_instance = ListAmlUserFeatureResult.from_json(json)
# print the JSON string representation of the object
print(ListAmlUserFeatureResult.to_json())

# convert the object into a dict
list_aml_user_feature_result_dict = list_aml_user_feature_result_instance.to_dict()
# create an instance of ListAmlUserFeatureResult from a dict
list_aml_user_feature_result_from_dict = ListAmlUserFeatureResult.from_dict(list_aml_user_feature_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


