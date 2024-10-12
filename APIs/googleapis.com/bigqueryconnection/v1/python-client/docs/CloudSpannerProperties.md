# CloudSpannerProperties

Connection properties specific to Cloud Spanner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database** | **str** | Cloud Spanner database in the form &#x60;project/instance/database&#39; | [optional] 
**database_role** | **str** | Optional. Cloud Spanner database role for fine-grained access control. The Cloud Spanner admin should have provisioned the database role with appropriate permissions, such as &#x60;SELECT&#x60; and &#x60;INSERT&#x60;. Other users should only use roles provided by their Cloud Spanner admins. For more details, see [About fine-grained access control] (https://cloud.google.com/spanner/docs/fgac-about). REQUIRES: The database role name must start with a letter, and can only contain letters, numbers, and underscores. | [optional] 
**max_parallelism** | **int** | Allows setting max parallelism per query when executing on Spanner independent compute resources. If unspecified, default values of parallelism are chosen that are dependent on the Cloud Spanner instance configuration. REQUIRES: &#x60;use_parallelism&#x60; must be set. REQUIRES: &#x60;use_data_boost&#x60; must be set. | [optional] 
**use_data_boost** | **bool** | If set, the request will be executed via Spanner independent compute resources. REQUIRES: &#x60;use_parallelism&#x60; must be set. | [optional] 
**use_parallelism** | **bool** | If parallelism should be used when reading from Cloud Spanner | [optional] 
**use_serverless_analytics** | **bool** | Deprecated: prefer use_data_boost instead. If the serverless analytics service should be used to read data from Cloud Spanner. Note: &#x60;use_parallelism&#x60; must be set when using serverless analytics. | [optional] 

## Example

```python
from openapi_client.models.cloud_spanner_properties import CloudSpannerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CloudSpannerProperties from a JSON string
cloud_spanner_properties_instance = CloudSpannerProperties.from_json(json)
# print the JSON string representation of the object
print(CloudSpannerProperties.to_json())

# convert the object into a dict
cloud_spanner_properties_dict = cloud_spanner_properties_instance.to_dict()
# create an instance of CloudSpannerProperties from a dict
cloud_spanner_properties_from_dict = CloudSpannerProperties.from_dict(cloud_spanner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


