# BookingEngineIdResponse

[booking type indicator](#section/Key-concepts/Booking-concepts) that indicates whether the booking will be `CONFIRMED` immediately or if it will remain `PENDING` even after the booking has been made  *one of* the following: - `\"UF\"` (FreesaleBE and UnconditionalBE) – this booking will be confirmed immediately - `\"OR\"` (DeferredCRMBE) – the booked product is an on-request product, will not be confirmed immediately and will have a `PENDING` status after it is booked, to be confirmed by the supplier within the time specified in the `hoursConfirmed` field available in the booking response and post-booking services - `\"FO\"` (FreesaleOnRequestBE) – the booked product is freesale up until a certain number of days before the travel date, referred to as the *on-request period*. 

## Enum

* `UF` (value: `'UF'`)

* `OR` (value: `'OR'`)

* `FO` (value: `'FO'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


