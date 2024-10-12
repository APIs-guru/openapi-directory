# SiteLimits

Represents metric limits set on a web app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_disk_size_in_mb** | **int** | Maximum allowed disk size usage in MB | [optional] 
**max_memory_in_mb** | **int** | Maximum allowed memory usage in MB | [optional] 
**max_percentage_cpu** | **float** | Maximum allowed CPU usage percentage | [optional] 

## Example

```python
from openapi_client.models.site_limits import SiteLimits

# TODO update the JSON string below
json = "{}"
# create an instance of SiteLimits from a JSON string
site_limits_instance = SiteLimits.from_json(json)
# print the JSON string representation of the object
print(SiteLimits.to_json())

# convert the object into a dict
site_limits_dict = site_limits_instance.to_dict()
# create an instance of SiteLimits from a dict
site_limits_from_dict = SiteLimits.from_dict(site_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


