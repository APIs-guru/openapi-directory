# Airflow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** |  | 
**value** | **str** |  | 

## Example

```python
from openapi_client.models.airflow import Airflow

# TODO update the JSON string below
json = "{}"
# create an instance of Airflow from a JSON string
airflow_instance = Airflow.from_json(json)
# print the JSON string representation of the object
print(Airflow.to_json())

# convert the object into a dict
airflow_dict = airflow_instance.to_dict()
# create an instance of Airflow from a dict
airflow_from_dict = Airflow.from_dict(airflow_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


