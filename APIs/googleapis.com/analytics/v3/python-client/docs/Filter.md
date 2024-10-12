# Filter

JSON template for an Analytics account filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID to which this filter belongs. | [optional] 
**advanced_details** | [**FilterAdvancedDetails**](FilterAdvancedDetails.md) |  | [optional] 
**created** | **datetime** | Time this filter was created. | [optional] [readonly] 
**exclude_details** | [**FilterExpression**](FilterExpression.md) |  | [optional] 
**id** | **str** | Filter ID. | [optional] 
**include_details** | [**FilterExpression**](FilterExpression.md) |  | [optional] 
**kind** | **str** | Resource type for Analytics filter. | [optional] [readonly] [default to 'analytics#filter']
**lowercase_details** | [**FilterLowercaseDetails**](FilterLowercaseDetails.md) |  | [optional] 
**name** | **str** | Name of this filter. | [optional] 
**parent_link** | [**FilterParentLink**](FilterParentLink.md) |  | [optional] 
**search_and_replace_details** | [**FilterSearchAndReplaceDetails**](FilterSearchAndReplaceDetails.md) |  | [optional] 
**self_link** | **str** | Link for this filter. | [optional] [readonly] 
**type** | **str** | Type of this filter. Possible values are INCLUDE, EXCLUDE, LOWERCASE, UPPERCASE, SEARCH_AND_REPLACE and ADVANCED. | [optional] 
**updated** | **datetime** | Time this filter was last modified. | [optional] [readonly] 
**uppercase_details** | [**FilterUppercaseDetails**](FilterUppercaseDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.filter import Filter

# TODO update the JSON string below
json = "{}"
# create an instance of Filter from a JSON string
filter_instance = Filter.from_json(json)
# print the JSON string representation of the object
print(Filter.to_json())

# convert the object into a dict
filter_dict = filter_instance.to_dict()
# create an instance of Filter from a dict
filter_from_dict = Filter.from_dict(filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


