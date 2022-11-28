from dataclasses import dataclass, field
from enum import Enum

class ScalingActivityStatusCodeEnum(str, Enum):
    PENDING_SPOT_BID_PLACEMENT = "PendingSpotBidPlacement"
    WAITING_FOR_SPOT_INSTANCE_REQUEST_ID = "WaitingForSpotInstanceRequestId"
    WAITING_FOR_SPOT_INSTANCE_ID = "WaitingForSpotInstanceId"
    WAITING_FOR_INSTANCE_ID = "WaitingForInstanceId"
    PRE_IN_SERVICE = "PreInService"
    IN_PROGRESS = "InProgress"
    WAITING_FOR_ELB_CONNECTION_DRAINING = "WaitingForELBConnectionDraining"
    MID_LIFECYCLE_ACTION = "MidLifecycleAction"
    WAITING_FOR_INSTANCE_WARMUP = "WaitingForInstanceWarmup"
    SUCCESSFUL = "Successful"
    FAILED = "Failed"
    CANCELLED = "Cancelled"

