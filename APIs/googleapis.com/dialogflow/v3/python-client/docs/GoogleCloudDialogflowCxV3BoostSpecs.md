# GoogleCloudDialogflowCxV3BoostSpecs

Boost specifications for data stores.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_stores** | **List[str]** | Optional. Data Stores where the boosting configuration is applied. The full names of the referenced data stores. Formats: &#x60;projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}&#x60; &#x60;projects/{project}/locations/{location}/dataStores/{data_store}&#x60; | [optional] 
**spec** | [**List[GoogleCloudDialogflowCxV3BoostSpec]**](GoogleCloudDialogflowCxV3BoostSpec.md) | Optional. A list of boosting specifications. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_boost_specs import GoogleCloudDialogflowCxV3BoostSpecs

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3BoostSpecs from a JSON string
google_cloud_dialogflow_cx_v3_boost_specs_instance = GoogleCloudDialogflowCxV3BoostSpecs.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3BoostSpecs.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_boost_specs_dict = google_cloud_dialogflow_cx_v3_boost_specs_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3BoostSpecs from a dict
google_cloud_dialogflow_cx_v3_boost_specs_from_dict = GoogleCloudDialogflowCxV3BoostSpecs.from_dict(google_cloud_dialogflow_cx_v3_boost_specs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


