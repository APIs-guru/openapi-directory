# GoogleCloudAssetV1Constraint

The definition of a constraint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boolean_constraint** | **object** | A &#x60;Constraint&#x60; that is either enforced or not. For example a constraint &#x60;constraints/compute.disableSerialPortAccess&#x60;. If it is enforced on a VM instance, serial port connections will not be opened to that instance. | [optional] 
**constraint_default** | **str** | The evaluation behavior of this constraint in the absence of &#39;Policy&#39;. | [optional] 
**description** | **str** | Detailed description of what this &#x60;Constraint&#x60; controls as well as how and where it is enforced. | [optional] 
**display_name** | **str** | The human readable name of the constraint. | [optional] 
**list_constraint** | [**GoogleCloudAssetV1ListConstraint**](GoogleCloudAssetV1ListConstraint.md) |  | [optional] 
**name** | **str** | The unique name of the constraint. Format of the name should be * &#x60;constraints/{constraint_name}&#x60; For example, &#x60;constraints/compute.disableSerialPortAccess&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1_constraint import GoogleCloudAssetV1Constraint

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1Constraint from a JSON string
google_cloud_asset_v1_constraint_instance = GoogleCloudAssetV1Constraint.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1Constraint.to_json())

# convert the object into a dict
google_cloud_asset_v1_constraint_dict = google_cloud_asset_v1_constraint_instance.to_dict()
# create an instance of GoogleCloudAssetV1Constraint from a dict
google_cloud_asset_v1_constraint_from_dict = GoogleCloudAssetV1Constraint.from_dict(google_cloud_asset_v1_constraint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


