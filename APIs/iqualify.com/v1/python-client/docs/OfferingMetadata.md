# OfferingMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | [optional] 
**level** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**topic** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.offering_metadata import OfferingMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of OfferingMetadata from a JSON string
offering_metadata_instance = OfferingMetadata.from_json(json)
# print the JSON string representation of the object
print(OfferingMetadata.to_json())

# convert the object into a dict
offering_metadata_dict = offering_metadata_instance.to_dict()
# create an instance of OfferingMetadata from a dict
offering_metadata_from_dict = OfferingMetadata.from_dict(offering_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


