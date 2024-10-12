# KubernetesDashboard

Configuration for the Kubernetes Dashboard.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** | Whether the Kubernetes Dashboard is enabled for this cluster. | [optional] 

## Example

```python
from openapi_client.models.kubernetes_dashboard import KubernetesDashboard

# TODO update the JSON string below
json = "{}"
# create an instance of KubernetesDashboard from a JSON string
kubernetes_dashboard_instance = KubernetesDashboard.from_json(json)
# print the JSON string representation of the object
print(KubernetesDashboard.to_json())

# convert the object into a dict
kubernetes_dashboard_dict = kubernetes_dashboard_instance.to_dict()
# create an instance of KubernetesDashboard from a dict
kubernetes_dashboard_from_dict = KubernetesDashboard.from_dict(kubernetes_dashboard_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


