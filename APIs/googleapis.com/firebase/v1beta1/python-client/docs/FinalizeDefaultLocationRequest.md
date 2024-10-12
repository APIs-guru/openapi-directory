# FinalizeDefaultLocationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_id** | **str** | The ID of the Project&#39;s default GCP resource location. The location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). | [optional] 

## Example

```python
from openapi_client.models.finalize_default_location_request import FinalizeDefaultLocationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FinalizeDefaultLocationRequest from a JSON string
finalize_default_location_request_instance = FinalizeDefaultLocationRequest.from_json(json)
# print the JSON string representation of the object
print(FinalizeDefaultLocationRequest.to_json())

# convert the object into a dict
finalize_default_location_request_dict = finalize_default_location_request_instance.to_dict()
# create an instance of FinalizeDefaultLocationRequest from a dict
finalize_default_location_request_from_dict = FinalizeDefaultLocationRequest.from_dict(finalize_default_location_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


