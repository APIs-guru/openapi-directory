# SnapshotReservationDetail

Details about snapshot space reservation and usage on the storage volume.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reserved_space_gib** | **str** | The space on this storage volume reserved for snapshots, shown in GiB. | [optional] 
**reserved_space_percent** | **int** | Percent of the total Volume size reserved for snapshot copies. Enabling snapshots requires reserving 20% or more of the storage volume space for snapshots. Maximum reserved space for snapshots is 40%. Setting this field will effectively set snapshot_enabled to true. | [optional] 
**reserved_space_remaining_gib** | **str** | The amount, in GiB, of available space in this storage volume&#39;s reserved snapshot space. | [optional] 
**reserved_space_used_percent** | **int** | The percent of snapshot space on this storage volume actually being used by the snapshot copies. This value might be higher than 100% if the snapshot copies have overflowed into the data portion of the storage volume. | [optional] 

## Example

```python
from openapi_client.models.snapshot_reservation_detail import SnapshotReservationDetail

# TODO update the JSON string below
json = "{}"
# create an instance of SnapshotReservationDetail from a JSON string
snapshot_reservation_detail_instance = SnapshotReservationDetail.from_json(json)
# print the JSON string representation of the object
print(SnapshotReservationDetail.to_json())

# convert the object into a dict
snapshot_reservation_detail_dict = snapshot_reservation_detail_instance.to_dict()
# create an instance of SnapshotReservationDetail from a dict
snapshot_reservation_detail_from_dict = SnapshotReservationDetail.from_dict(snapshot_reservation_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


