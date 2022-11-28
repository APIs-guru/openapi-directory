export var ClusterStateEnum;
(function (ClusterStateEnum) {
    ClusterStateEnum["Starting"] = "STARTING";
    ClusterStateEnum["Bootstrapping"] = "BOOTSTRAPPING";
    ClusterStateEnum["Running"] = "RUNNING";
    ClusterStateEnum["Waiting"] = "WAITING";
    ClusterStateEnum["Terminating"] = "TERMINATING";
    ClusterStateEnum["Terminated"] = "TERMINATED";
    ClusterStateEnum["TerminatedWithErrors"] = "TERMINATED_WITH_ERRORS";
})(ClusterStateEnum || (ClusterStateEnum = {}));
