# MetadataTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**view_template** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.metadata_template import MetadataTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataTemplate from a JSON string
metadata_template_instance = MetadataTemplate.from_json(json)
# print the JSON string representation of the object
print(MetadataTemplate.to_json())

# convert the object into a dict
metadata_template_dict = metadata_template_instance.to_dict()
# create an instance of MetadataTemplate from a dict
metadata_template_from_dict = MetadataTemplate.from_dict(metadata_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


