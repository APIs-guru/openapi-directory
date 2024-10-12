# LoadSnapshotRequest

Request to load a snapshot into a Cloud Composer environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skip_airflow_overrides_setting** | **bool** | Whether or not to skip setting Airflow overrides when loading the environment&#39;s state. | [optional] 
**skip_environment_variables_setting** | **bool** | Whether or not to skip setting environment variables when loading the environment&#39;s state. | [optional] 
**skip_gcs_data_copying** | **bool** | Whether or not to skip copying Cloud Storage data when loading the environment&#39;s state. | [optional] 
**skip_pypi_packages_installation** | **bool** | Whether or not to skip installing Pypi packages when loading the environment&#39;s state. | [optional] 
**snapshot_path** | **str** | A Cloud Storage path to a snapshot to load, e.g.: \&quot;gs://my-bucket/snapshots/project_location_environment_timestamp\&quot;. | [optional] 

## Example

```python
from openapi_client.models.load_snapshot_request import LoadSnapshotRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LoadSnapshotRequest from a JSON string
load_snapshot_request_instance = LoadSnapshotRequest.from_json(json)
# print the JSON string representation of the object
print(LoadSnapshotRequest.to_json())

# convert the object into a dict
load_snapshot_request_dict = load_snapshot_request_instance.to_dict()
# create an instance of LoadSnapshotRequest from a dict
load_snapshot_request_from_dict = LoadSnapshotRequest.from_dict(load_snapshot_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


