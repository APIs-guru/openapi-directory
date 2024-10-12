# AttributeGroupsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **List[str]** | Attribute codes that compose the attribute group | [optional] 
**code** | **str** | Attribute group code | 
**labels** | [**AttributeGroupsAllOfEmbeddedItemsInnerAllOfLabels**](AttributeGroupsAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 
**sort_order** | **int** | Attribute group order among other attribute groups | [optional] 

## Example

```python
from openapi_client.models.attribute_groups_post_request import AttributeGroupsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeGroupsPostRequest from a JSON string
attribute_groups_post_request_instance = AttributeGroupsPostRequest.from_json(json)
# print the JSON string representation of the object
print(AttributeGroupsPostRequest.to_json())

# convert the object into a dict
attribute_groups_post_request_dict = attribute_groups_post_request_instance.to_dict()
# create an instance of AttributeGroupsPostRequest from a dict
attribute_groups_post_request_from_dict = AttributeGroupsPostRequest.from_dict(attribute_groups_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


