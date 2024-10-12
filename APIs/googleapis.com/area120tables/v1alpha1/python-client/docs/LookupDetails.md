# LookupDetails

Details about a lookup column whose value comes from the associated relationship.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relationship_column** | **str** | The name of the relationship column associated with the lookup. | [optional] 
**relationship_column_id** | **str** | The id of the relationship column. | [optional] 

## Example

```python
from openapi_client.models.lookup_details import LookupDetails

# TODO update the JSON string below
json = "{}"
# create an instance of LookupDetails from a JSON string
lookup_details_instance = LookupDetails.from_json(json)
# print the JSON string representation of the object
print(LookupDetails.to_json())

# convert the object into a dict
lookup_details_dict = lookup_details_instance.to_dict()
# create an instance of LookupDetails from a dict
lookup_details_from_dict = LookupDetails.from_dict(lookup_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


