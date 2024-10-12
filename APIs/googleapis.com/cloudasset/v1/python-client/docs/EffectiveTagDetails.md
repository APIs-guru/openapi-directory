# EffectiveTagDetails

The effective tags and the ancestor resources from which they were inherited.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attached_resource** | **str** | The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) of the ancestor from which an effective_tag is inherited, according to [tag inheritance](https://cloud.google.com/resource-manager/docs/tags/tags-overview#inheritance). | [optional] 
**effective_tags** | [**List[Tag]**](Tag.md) | The effective tags inherited from the attached_resource. Note that tags with the same key but different values may attach to resources at a different hierarchy levels. The lower hierarchy tag value will overwrite the higher hierarchy tag value of the same tag key. In this case, the tag value at the higher hierarchy level will be removed. For more information, see [tag inheritance](https://cloud.google.com/resource-manager/docs/tags/tags-overview#inheritance). | [optional] 

## Example

```python
from openapi_client.models.effective_tag_details import EffectiveTagDetails

# TODO update the JSON string below
json = "{}"
# create an instance of EffectiveTagDetails from a JSON string
effective_tag_details_instance = EffectiveTagDetails.from_json(json)
# print the JSON string representation of the object
print(EffectiveTagDetails.to_json())

# convert the object into a dict
effective_tag_details_dict = effective_tag_details_instance.to_dict()
# create an instance of EffectiveTagDetails from a dict
effective_tag_details_from_dict = EffectiveTagDetails.from_dict(effective_tag_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


