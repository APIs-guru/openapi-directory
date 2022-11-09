export var ClusterStateEnum;
(function (ClusterStateEnum) {
    ClusterStateEnum["CreateInProgress"] = "CREATE_IN_PROGRESS";
    ClusterStateEnum["Uninitialized"] = "UNINITIALIZED";
    ClusterStateEnum["InitializeInProgress"] = "INITIALIZE_IN_PROGRESS";
    ClusterStateEnum["Initialized"] = "INITIALIZED";
    ClusterStateEnum["Active"] = "ACTIVE";
    ClusterStateEnum["UpdateInProgress"] = "UPDATE_IN_PROGRESS";
    ClusterStateEnum["DeleteInProgress"] = "DELETE_IN_PROGRESS";
    ClusterStateEnum["Deleted"] = "DELETED";
    ClusterStateEnum["Degraded"] = "DEGRADED";
})(ClusterStateEnum || (ClusterStateEnum = {}));
