# BasicService

A well-known service type, defined by its service type and service labels. Documentation and examples here (https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_labels** | **Dict[str, str]** | Labels that specify the resource that emits the monitoring data which is used for SLO reporting of this Service. Documentation and valid values for given service types here (https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli). | [optional] 
**service_type** | **str** | The type of service that this basic service defines, e.g. APP_ENGINE service type. Documentation and valid values here (https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli). | [optional] 

## Example

```python
from openapi_client.models.basic_service import BasicService

# TODO update the JSON string below
json = "{}"
# create an instance of BasicService from a JSON string
basic_service_instance = BasicService.from_json(json)
# print the JSON string representation of the object
print(BasicService.to_json())

# convert the object into a dict
basic_service_dict = basic_service_instance.to_dict()
# create an instance of BasicService from a dict
basic_service_from_dict = BasicService.from_dict(basic_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


