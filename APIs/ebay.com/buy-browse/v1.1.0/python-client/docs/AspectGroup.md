# AspectGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspects** | [**List[Aspect]**](Aspect.md) | An array of the name/value pairs for the aspects of the product. For example: BRAND/Apple | [optional] 
**localized_group_name** | **str** | The name of a group of aspects. In the following example, Product Identifiers and Process are product aspect group names. Under the group name are the product aspect name/value pairs. Product Identifiers &amp;nbsp;&amp;nbsp;&amp;nbsp;Brand/Apple &amp;nbsp;&amp;nbsp;&amp;nbsp;Product Family/iMac Processor &amp;nbsp;&amp;nbsp;&amp;nbsp;Processor Type/Intel &amp;nbsp;&amp;nbsp;&amp;nbsp;Processor Speed/3.10 | [optional] 

## Example

```python
from openapi_client.models.aspect_group import AspectGroup

# TODO update the JSON string below
json = "{}"
# create an instance of AspectGroup from a JSON string
aspect_group_instance = AspectGroup.from_json(json)
# print the JSON string representation of the object
print(AspectGroup.to_json())

# convert the object into a dict
aspect_group_dict = aspect_group_instance.to_dict()
# create an instance of AspectGroup from a dict
aspect_group_from_dict = AspectGroup.from_dict(aspect_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


