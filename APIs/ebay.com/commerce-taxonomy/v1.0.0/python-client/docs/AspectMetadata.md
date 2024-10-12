# AspectMetadata

This type is the container type for the response payload of the <b>getItemAspectsForCategory</b> call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspects** | [**List[Aspect]**](Aspect.md) | A list of item aspects (for example, color) that are appropriate or necessary for accurately describing items in a particular leaf category. Each category has a different set of aspects and different requirements for aspect values. Sellers are required or encouraged to provide one or more acceptable values for each aspect when offering an item in that category on eBay. | [optional] 

## Example

```python
from openapi_client.models.aspect_metadata import AspectMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of AspectMetadata from a JSON string
aspect_metadata_instance = AspectMetadata.from_json(json)
# print the JSON string representation of the object
print(AspectMetadata.to_json())

# convert the object into a dict
aspect_metadata_dict = aspect_metadata_instance.to_dict()
# create an instance of AspectMetadata from a dict
aspect_metadata_from_dict = AspectMetadata.from_dict(aspect_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


