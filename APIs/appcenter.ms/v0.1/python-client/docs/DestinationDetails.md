# DestinationDetails

Destination details for distributing build releases

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.destination_details import DestinationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationDetails from a JSON string
destination_details_instance = DestinationDetails.from_json(json)
# print the JSON string representation of the object
print(DestinationDetails.to_json())

# convert the object into a dict
destination_details_dict = destination_details_instance.to_dict()
# create an instance of DestinationDetails from a dict
destination_details_from_dict = DestinationDetails.from_dict(destination_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


