# AssociateLocationRequest

Request message for Locations.AssociateLocationRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**place_id** | **str** | The association to establish. If not set, it indicates no match. | [optional] 

## Example

```python
from openapi_client.models.associate_location_request import AssociateLocationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssociateLocationRequest from a JSON string
associate_location_request_instance = AssociateLocationRequest.from_json(json)
# print the JSON string representation of the object
print(AssociateLocationRequest.to_json())

# convert the object into a dict
associate_location_request_dict = associate_location_request_instance.to_dict()
# create an instance of AssociateLocationRequest from a dict
associate_location_request_from_dict = AssociateLocationRequest.from_dict(associate_location_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


