# AddFirebaseRequest

All fields are required.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_id** | **str** | Deprecated. Instead, to set a Project&#39;s default GCP resource location, call [&#x60;FinalizeDefaultLocation&#x60;](../projects.defaultLocation/finalize) after you add Firebase resources to the GCP &#x60;Project&#x60;. The ID of the Project&#39;s default GCP resource location. The location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). | [optional] 

## Example

```python
from openapi_client.models.add_firebase_request import AddFirebaseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddFirebaseRequest from a JSON string
add_firebase_request_instance = AddFirebaseRequest.from_json(json)
# print the JSON string representation of the object
print(AddFirebaseRequest.to_json())

# convert the object into a dict
add_firebase_request_dict = add_firebase_request_instance.to_dict()
# create an instance of AddFirebaseRequest from a dict
add_firebase_request_from_dict = AddFirebaseRequest.from_dict(add_firebase_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


